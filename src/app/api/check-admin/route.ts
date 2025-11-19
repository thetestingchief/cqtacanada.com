import { NextRequest, NextResponse } from 'next/server';
import { isUserAdmin } from '../../../../lib/supabase-admin';
import { getAuth } from '@clerk/nextjs/server';

export async function GET(req: NextRequest) {
  const { userId } = getAuth(req);
  console.log('check-admin: userId', userId);
  if (!userId) {
    console.log('check-admin: No userId');
    return NextResponse.json({ admin: false }, { status: 401 });
  }
  try {
    const isAdmin = await isUserAdmin(userId);
    console.log('check-admin: isAdmin', isAdmin);
    return NextResponse.json({ admin: isAdmin });
  } catch (err) {
    console.error('check-admin: error', err);
    return NextResponse.json({ admin: false, error: String(err) }, { status: 500 });
  }
}
