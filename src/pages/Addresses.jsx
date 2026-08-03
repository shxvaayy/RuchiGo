import Navbar from "../components/Navbar.jsx";
import {
  MapPin,
  Home,
  Building2,
  Plus,
} from "lucide-react";

import { useState } from "react";

const initialAddresses = [
  {
    id: 1,
    type: "Home",
    icon: Home,
    address:
      "12-34, Brodipet, Guntur, Andhra Pradesh - 522002",
    default: true,
  },
  {
    id: 2,
    type: "Work",
    icon: Building2,
    address:
      "Auto Nagar, Vijayawada, Andhra Pradesh - 520007",
    default: false,
  },
  {
    id: 3,
    type: "Parents Home",
    icon: Home,
    address:
      "Narasaraopet, Palnadu, Andhra Pradesh - 522601",
    default: false,
  },
];

export default function Addresses() {

  const [addresses] =
    useState(initialAddresses);

  return (

    <>

      <Navbar />

      <main className="min-h-screen bg-[#fffaf7]">

        <section className="mx-auto max-w-6xl px-6 py-10">

          {/* Header */}

          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-center">

            <div>

              <p className="font-semibold text-orange-500">
                Delivery
              </p>

              <h1 className="mt-2 text-4xl font-bold text-gray-900">
                Saved Addresses
              </h1>

              <p className="mt-3 text-gray-500">
                Manage your delivery locations for faster checkout.
              </p>

            </div>

            <button className="flex items-center gap-2 rounded-xl bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600">

              <Plus size={20} />

              Add New Address

            </button>

          </div>

          {/* Address Cards */}

          <div className="space-y-6">
                        {addresses.length === 0 ? (

              <div className="rounded-3xl border border-dashed border-orange-200 bg-white py-20 text-center shadow-sm">

                <MapPin
                  size={70}
                  className="mx-auto text-orange-300"
                />

                <h2 className="mt-6 text-3xl font-bold text-gray-900">
                  No Saved Addresses
                </h2>

                <p className="mt-4 text-gray-500">
                  Add your first delivery address to enjoy faster checkout.
                </p>

              </div>

            ) : (

              addresses.map((address) => {

                const Icon = address.icon;

                return (

                  <div
                    key={address.id}
                    className="rounded-3xl border border-orange-100 bg-white p-7 shadow-sm transition hover:border-orange-300 hover:shadow-lg"
                  >

                    <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

                      {/* Left Side */}

                      <div className="flex items-start gap-5">

                        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100 text-orange-500">

                          <Icon size={30} />

                        </div>

                        <div>

                          <div className="flex flex-wrap items-center gap-3">

                            <h2 className="text-2xl font-bold text-gray-900">
                              {address.type}
                            </h2>

                            {address.default && (

                              <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-600">
                                Default
                              </span>

                            )}

                          </div>

                          <p className="mt-3 max-w-xl leading-7 text-gray-500">
                            {address.address}
                          </p>

                        </div>

                      </div>

                      {/* Right Side */}

                      <div className="flex flex-wrap gap-3">

                        <button className="rounded-xl bg-orange-500 px-5 py-3 font-semibold text-white transition hover:bg-orange-600">
                          Use Address
                        </button>

                        <button className="rounded-xl border border-blue-300 px-5 py-3 font-semibold text-blue-600 transition hover:bg-blue-500 hover:text-white">
                          Edit
                        </button>

                        <button className="rounded-xl border border-red-300 px-5 py-3 font-semibold text-red-600 transition hover:bg-red-500 hover:text-white">
                          Delete
                        </button>

                      </div>

                    </div>

                  </div>

                );

              })

            )}
                      </div>

        </section>

      </main>

    </>

  );

}