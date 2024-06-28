import CallList from "@/components/CallList";
import React from "react";

const page = () => {
  return (
    <section className="text-white flex size-full flex-col gap-10 ">
      <h1 className="text-3xl font-bold">Recordings of meetings</h1>

      <CallList type="recordings" />
    </section>
  );
};

export default page;
