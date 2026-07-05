"use client";

import { useState, useEffect } from "react";
import { format } from "date-fns";
import { 
  Search, Download, Trash2, Copy, CheckCircle, 
  Clock, Check, Loader2, ChevronLeft, ChevronRight, X 
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface Booking {
  id: string;
  fullName: string;
  company: string | null;
  email: string;
  phone: string;
  industry: string | null;
  service: string | null;
  budget: string | null;
  description: string;
  status: string;
  createdAt: string;
}

export default function BookingsPage() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  
  // Filters & Pagination state
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [total, setTotal] = useState(0);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");
  const [service, setService] = useState("All");
  const [sort, setSort] = useState("desc");

  // Notifications
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null);

  const fetchBookings = async () => {
    setLoading(true);
    try {
      const query = new URLSearchParams({
        page: page.toString(),
        limit: "10",
        search,
        status,
        service,
        sort,
      });

      const res = await fetch(`/api/admin/bookings?${query.toString()}`);
      const data = await res.json();

      if (res.ok) {
        setBookings(data.bookings);
        setTotalPages(data.totalPages);
        setTotal(data.total);
      }
    } catch (error) {
      showToast("Failed to fetch bookings", "error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, [page, search, status, service, sort]);

  const showToast = (message: string, type: "success" | "error" = "success") => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    showToast(`Copied ${text}`);
  };

  const updateStatus = async (id: string, newStatus: string) => {
    try {
      const res = await fetch(`/api/admin/bookings/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });

      if (res.ok) {
        showToast("Status updated");
        setBookings(bookings.map(b => b.id === id ? { ...b, status: newStatus } : b));
      }
    } catch (error) {
      showToast("Failed to update status", "error");
    }
  };

  const deleteBooking = async (id: string) => {
    if (!confirm("Are you sure you want to delete this booking?")) return;

    try {
      const res = await fetch(`/api/admin/bookings/${id}`, { method: "DELETE" });
      if (res.ok) {
        showToast("Booking deleted");
        fetchBookings();
      }
    } catch (error) {
      showToast("Failed to delete booking", "error");
    }
  };

  return (
    <div className="space-y-6 relative">
      {/* Toast */}
      {toast && (
        <div className={`fixed top-4 right-4 z-50 px-4 py-2 rounded-lg text-white shadow-lg transition-all flex items-center gap-2 ${
          toast.type === "error" ? "bg-red-500" : "bg-green-500"
        }`}>
          {toast.type === "success" && <CheckCircle className="w-4 h-4" />}
          {toast.message}
        </div>
      )}

      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white">Bookings</h1>
          <p className="text-muted-foreground">Manage all consultation requests ({total} total)</p>
        </div>
        <a 
          href="/api/admin/export"
          target="_blank"
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
        >
          <Download className="w-4 h-4" />
          Export CSV
        </a>
      </div>

      {/* Filters Toolbar */}
      <div className="flex flex-wrap items-center gap-4 p-4 bg-[#0a1020]/50 border border-white/10 rounded-xl backdrop-blur-sm">
        {/* Search */}
        <div className="relative flex-1 min-w-[200px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input 
            type="text" 
            placeholder="Search name, email, company..." 
            value={search}
            onChange={(e) => { setSearch(e.target.value); setPage(1); }}
            className="w-full bg-white/5 border border-white/10 rounded-lg pl-9 pr-4 py-2 text-sm text-white placeholder:text-muted-foreground focus:outline-none focus:border-blue-500/50"
          />
        </div>
        
        {/* Status Filter */}
        <select 
          value={status}
          onChange={(e) => { setStatus(e.target.value); setPage(1); }}
          className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-blue-500/50"
        >
          <option value="All" className="bg-[#0a1020]">All Statuses</option>
          <option value="New" className="bg-[#0a1020]">New</option>
          <option value="Contacted" className="bg-[#0a1020]">Contacted</option>
          <option value="In Progress" className="bg-[#0a1020]">In Progress</option>
          <option value="Completed" className="bg-[#0a1020]">Completed</option>
        </select>

        {/* Sort */}
        <select 
          value={sort}
          onChange={(e) => { setSort(e.target.value); setPage(1); }}
          className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-blue-500/50"
        >
          <option value="desc" className="bg-[#0a1020]">Newest First</option>
          <option value="asc" className="bg-[#0a1020]">Oldest First</option>
        </select>
      </div>

      {/* Table */}
      <div className="bg-[#0a1020]/50 border border-white/10 rounded-xl overflow-hidden backdrop-blur-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-muted-foreground">
            <thead className="text-xs text-white uppercase bg-white/5 border-b border-white/10">
              <tr>
                <th className="px-6 py-4">Client</th>
                <th className="px-6 py-4">Contact</th>
                <th className="px-6 py-4">Project Info</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Date</th>
                <th className="px-6 py-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan={6} className="px-6 py-12 text-center">
                    <Loader2 className="w-6 h-6 animate-spin mx-auto text-blue-500" />
                  </td>
                </tr>
              ) : bookings.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-6 py-12 text-center">
                    No bookings found.
                  </td>
                </tr>
              ) : (
                bookings.map((booking) => (
                  <tr key={booking.id} className="border-b border-white/10 hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4">
                      <div className="font-medium text-white">{booking.fullName}</div>
                      {booking.company && <div className="text-xs">{booking.company}</div>}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-between group">
                        <span className="truncate max-w-[120px]">{booking.email}</span>
                        <button onClick={() => handleCopy(booking.email)} className="opacity-0 group-hover:opacity-100 hover:text-blue-400 p-1"><Copy className="w-3 h-3" /></button>
                      </div>
                      <div className="flex items-center justify-between group mt-1">
                        <span>{booking.phone}</span>
                        <button onClick={() => handleCopy(booking.phone)} className="opacity-0 group-hover:opacity-100 hover:text-blue-400 p-1"><Copy className="w-3 h-3" /></button>
                      </div>
                    </td>
                    <td className="px-6 py-4 max-w-[200px]">
                      <div className="truncate font-medium text-white/80">{booking.service || booking.industry || 'No category'}</div>
                      <div className="truncate text-xs">{booking.budget || 'No budget'}</div>
                      <div className="truncate text-xs text-white/40 mt-1" title={booking.description}>{booking.description}</div>
                    </td>
                    <td className="px-6 py-4">
                      <select
                        value={booking.status}
                        onChange={(e) => updateStatus(booking.id, e.target.value)}
                        className={`text-xs font-semibold px-2 py-1 rounded-full outline-none border border-white/10 ${
                          booking.status === "New" ? "bg-blue-500/20 text-blue-400" :
                          booking.status === "Contacted" ? "bg-yellow-500/20 text-yellow-400" :
                          booking.status === "In Progress" ? "bg-purple-500/20 text-purple-400" :
                          booking.status === "Completed" ? "bg-green-500/20 text-green-400" :
                          "bg-white/10 text-white"
                        }`}
                      >
                        <option value="New" className="bg-[#0a1020]">New</option>
                        <option value="Contacted" className="bg-[#0a1020]">Contacted</option>
                        <option value="In Progress" className="bg-[#0a1020]">In Progress</option>
                        <option value="Completed" className="bg-[#0a1020]">Completed</option>
                      </select>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {format(new Date(booking.createdAt), "MMM d, yyyy")}
                      </div>
                      <div className="text-xs ml-4">{format(new Date(booking.createdAt), "h:mm a")}</div>
                    </td>
                    <td className="px-6 py-4">
                      <button 
                        onClick={() => deleteBooking(booking.id)}
                        className="text-muted-foreground hover:text-red-400 transition-colors p-2 rounded-lg hover:bg-white/5"
                        title="Delete Booking"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-between px-6 py-4 border-t border-white/10">
            <span className="text-sm">Page {page} of {totalPages}</span>
            <div className="flex gap-2">
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => setPage(p => Math.max(1, p - 1))}
                disabled={page === 1}
                className="bg-transparent border-white/10 hover:bg-white/5 hover:text-white"
              >
                <ChevronLeft className="w-4 h-4 mr-1" /> Prev
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
                className="bg-transparent border-white/10 hover:bg-white/5 hover:text-white"
              >
                Next <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
