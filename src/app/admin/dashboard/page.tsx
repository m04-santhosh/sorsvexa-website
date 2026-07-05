import { db } from "@/lib/db";
import { Users, Calendar, TrendingUp, Clock } from "lucide-react";
import { startOfDay, startOfMonth } from "date-fns";

export const dynamic = "force-dynamic";

export default async function DashboardPage() {
  const now = new Date();
  
  // Total bookings
  const totalBookings = await db.booking.count();
  
  // Today's bookings
  const todayBookings = await db.booking.count({
    where: {
      createdAt: {
        gte: startOfDay(now),
      }
    }
  });

  // This month's bookings
  const monthBookings = await db.booking.count({
    where: {
      createdAt: {
        gte: startOfMonth(now),
      }
    }
  });

  // Pending bookings (status = New)
  const pendingBookings = await db.booking.count({
    where: {
      status: "New"
    }
  });

  const cards = [
    {
      title: "Total Bookings",
      value: totalBookings.toString(),
      icon: Users,
      description: "All-time consultation requests",
    },
    {
      title: "Today's Bookings",
      value: todayBookings.toString(),
      icon: Calendar,
      description: "Requests received today",
    },
    {
      title: "This Month",
      value: monthBookings.toString(),
      icon: TrendingUp,
      description: "Requests this month",
    },
    {
      title: "Pending Bookings",
      value: pendingBookings.toString(),
      icon: Clock,
      description: "New requests waiting for action",
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight text-white">Dashboard</h1>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {cards.map((card, i) => (
          <div key={i} className="rounded-xl border border-white/10 bg-[#0a1020]/50 p-6 shadow-sm backdrop-blur-sm">
            <div className="flex items-center justify-between space-y-0 pb-2">
              <h3 className="tracking-tight text-sm font-medium text-muted-foreground">
                {card.title}
              </h3>
              <card.icon className="h-4 w-4 text-blue-400" />
            </div>
            <div className="flex flex-col gap-1">
              <div className="text-2xl font-bold text-white">{card.value}</div>
              <p className="text-xs text-muted-foreground">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
