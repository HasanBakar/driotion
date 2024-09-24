"use client";
import React from "react";
import { useRouter } from "next/navigation";
const NotFoundButton = () => {
  const router = useRouter();
  const handleGoBack = () => {
    router.back();
  };
  return (
    <React.Fragment>
      <button
        onClick={handleGoBack}
        className=" btn btn-primary w-full my-4 text-slate-800"
      >
        Back
      </button>
    </React.Fragment>
  );
};

export default NotFoundButton;
