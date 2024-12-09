import mongoose, { Schema, Document, Model } from "mongoose";

export interface Business extends Document{
	id: number;
	uuid: string;
	business_type: string;
	franchise_id?: any;
	name: string;
	address: string;
	time_zone?: any;
	country?: any;
	country_code?: any;
	currency_symbol?: any;
	currency_text?: any;
	logo: string;
	logo_url: string;
	country_id: number;
	status: number;
	owner_id: number;
	primary_contact_user_id: number;
	plan_id: number;
	updated_discount_code?: any;
	subs_expired?: any;
	restricted_access?: any;
	next_due_date: string;
	has_mb_account?: any;
	is_mb_skipped?: any;
	mb_account_type?: any;
	cron_status: number;
	cron_last_updated?: any;
	deleted_at: string;
	deleted_by: number;
	created_at: string;
	updated_at: string;
	created_by: number;
}

const businessSchema = new Schema<Business>(
	{
	  id: { type: Number, required: true },
	  uuid: { type: String, required: true },
	  business_type: { type: String, required: true },
	  franchise_id: { type: Number, default: null },
	  name: { type: String, required: true },
	  address: { type: String, required: true },
	  time_zone: { type: String, default: null },
	  country: { type: String, default: null },
	  country_code: { type: String, default: null },
	  currency_symbol: { type: String, default: null },
	  currency_text: { type: String, default: null },
	  logo: { type: String, required: true },
	  logo_url: { type: String, required: true },
	  country_id: { type: Number, required: true },
	  status: { type: Number, required: true },
	  owner_id: { type: Number, required: true },
	  primary_contact_user_id: { type: Number, required: true },
	  plan_id: { type: Number, required: true },
	  updated_discount_code: { type: String, default: null },
	  subs_expired: { type: String, default: null },
	  restricted_access: { type: Boolean, default: null },
	  next_due_date: { type: String, default: null },
	  has_mb_account: { type: Boolean, default: null },
	  is_mb_skipped: { type: Boolean, default: null },
	  mb_account_type: { type: String, default: null },
	  cron_status: { type: Number, required: true },
	  cron_last_updated: { type: String, default: null },
	  deleted_at: { type: String, default: null },
	  deleted_by: { type: Number, default: null },
	  created_at: { type: String, required: true },
	  updated_at: { type: String, required: true },
	  created_by: { type: Number, required: true },
	},
	{ timestamps: false }
  );
  
  const BusinessModel: Model<Business> =
	mongoose.models.Business || mongoose.model<Business>("Business", businessSchema);
  
  export default BusinessModel;