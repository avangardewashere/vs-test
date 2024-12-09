"use client";

import { useRouter } from "next/router";
import { useState } from "react";

export default function AddForm() {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");
  const [franchise, setFranchise] = useState("");
  const [plan, setPlan] = useState("");
  const [discount, setDiscount] = useState("");

  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!name || !type || !address || !plan) {
      alert("Title ,Description, address, and plan fields are required!");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/topics", {
        method: "POST",
        headers: {
          "Content-type": "applicationjson",
        },
        body: JSON.stringify({
          name,
          type,
          address,
          country,
          franchise,
          plan,
          discount,
        }),
      });

      if (res.ok) {
		console.log(res)
		alert("Creation Success!")
        router.push("/");
      } else {
        throw new Error("Failed to create new Topic");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        onChange={(e) => {
          setName(e.target.value);
        }}
        value={""}
        type="text"
        placeholder="Enter Business Name"
        className="border rounded-md border-slate-500 px-8 py-2"
      />

      <input
        onChange={(e) => {
          setType(e.target.value);
        }}
        value={""}
        type="text"
        placeholder="Enter Business Type"
        className="border rounded-md border-slate-500 px-8 py-2"
      />

      <input
        onChange={(e) => {
          setAddress(e.target.value);
        }}
        value={""}
        type="text"
        placeholder="Enter Business Address"
        className="border rounded-md border-slate-500 px-8 py-2"
      />

      <input
        onChange={(e) => {
          setCountry(e.target.value);
        }}
        value={""}
        type="text"
        placeholder="Enter Country"
        className="border rounded-md border-slate-500 px-8 py-2"
      />

      <input
        onChange={(e) => {
          setFranchise(e.target.value);
        }}
        value={""}
        type="text"
        placeholder="Enter Franchise ID"
        className="border rounded-md border-slate-500 px-8 py-2"
      />

      <input
        onChange={(e) => {
          setPlan(e.target.value);
        }}
        value={""}
        type="text"
        placeholder="Enter Plan ID"
        className="border rounded-md border-slate-500 px-8 py-2"
      />

      <input
        onChange={(e) => {
          setDiscount(e.target.value);
        }}
        value={""}
        type="text"
        placeholder="Enter Discount Code"
        className="border rounded-md border-slate-500 px-8 py-2"
      />

      <button
        type="submit"
        className="bg-green-600 font-bold rounded-md text-white py-3 px-6 w-fit"
      >
        Add Studio
      </button>
    </form>
  );
}
