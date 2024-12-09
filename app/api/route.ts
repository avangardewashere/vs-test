import { NextResponse } from "next/server";
import connectMongoDB from "@/libs/mongodb"; // Adjust the path as needed
import Business from "@/models/studio"; // Adjust the path to the model

export async function POST(request: Request) {
  try {
    // Destructure fields from the incoming JSON request body
    const {
      id,
      uuid,
      business_type,
      franchise_id,
      name,
      address,
      time_zone,
      country,
      country_code,
      currency_symbol,
      currency_text,
      logo,
      logo_url,
      country_id,
      status,
      owner_id,
      primary_contact_user_id,
      plan_id,
      updated_discount_code,
      subs_expired,
      restricted_access,
      next_due_date,
      has_mb_account,
      is_mb_skipped,
      mb_account_type,
      cron_status,
      cron_last_updated,
      deleted_at,
      deleted_by,
      created_at,
      updated_at,
      created_by
    } = await request.json();

    // Connect to MongoDB
    await connectMongoDB();

    // Create the new business entry
    const newBusiness = await Business.create({
      id,
      uuid,
      business_type,
      franchise_id,
      name,
      address,
      time_zone,
      country,
      country_code,
      currency_symbol,
      currency_text,
      logo,
      logo_url,
      country_id,
      status,
      owner_id,
      primary_contact_user_id,
      plan_id,
      updated_discount_code,
      subs_expired,
      restricted_access,
      next_due_date,
      has_mb_account,
      is_mb_skipped,
      mb_account_type,
      cron_status,
      cron_last_updated,
      deleted_at,
      deleted_by,
      created_at,
      updated_at,
      created_by
    });

    // Return success response
    return NextResponse.json(
      {
        message: "Business has been created successfully.",
        business: newBusiness
      },
      { status: 201 }
    );
  } catch (error:any) {
    // Handle errors and return a failure response
    return NextResponse.json(
      {
        message: "Error creating business.",
        error: error.message 
      },
      { status: 500 }
    );
  }
}
