import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

// Define the path to the JSON file
const dataFilePath = path.join(process.cwd(), 'data', 'reviews.json');

// Ensure the data directory and file exist
function ensureDataFileExists() {
  const dirPath = path.dirname(dataFilePath);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
  if (!fs.existsSync(dataFilePath)) {
    fs.writeFileSync(dataFilePath, JSON.stringify([], null, 2), 'utf-8');
  }
}

export async function GET() {
  try {
    ensureDataFileExists();
    const fileContent = fs.readFileSync(dataFilePath, 'utf-8');
    const allReviews = JSON.parse(fileContent);
    
    // Only return approved reviews
    const approvedReviews = allReviews.filter((review: any) => review.status === 'Approved');
    
    return NextResponse.json(approvedReviews, { status: 200 });
  } catch (error) {
    console.error('Error reading reviews:', error);
    return NextResponse.json({ error: 'Failed to fetch reviews' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validate required fields
    if (!body.ownerName || !body.companyName || !body.rating || !body.review) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    ensureDataFileExists();
    const fileContent = fs.readFileSync(dataFilePath, 'utf-8');
    const allReviews = JSON.parse(fileContent);
    
    // Create new review
    const newReview = {
      id: Date.now().toString(),
      timestamp: new Date().toISOString(),
      ownerName: body.ownerName,
      companyName: body.companyName,
      rating: Number(body.rating),
      review: body.review,
      website: body.website || '',
      logoUrl: body.logoUrl || '',
      status: 'Pending' // Always set to Pending initially
    };

    // Add to array and save
    allReviews.push(newReview);
    fs.writeFileSync(dataFilePath, JSON.stringify(allReviews, null, 2), 'utf-8');
    
    return NextResponse.json({ success: true, message: 'Review submitted successfully and is pending approval.' }, { status: 201 });
  } catch (error) {
    console.error('Error saving review:', error);
    return NextResponse.json({ error: 'Failed to save review' }, { status: 500 });
  }
}
