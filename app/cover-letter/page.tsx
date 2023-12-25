"use client"
import { useEffect, useState } from "react";

const CoverLetter = () => {
  const [company, setCompany] = useState<string>("");
  const [role, setRole] = useState<string>("");
  
  useEffect(() => {
    const script = document.createElement("script");

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="flex flex-col items-center w-full">
      <h1 className="my-[4rem] text-4xl">Edit your Cover Letter</h1>
      <div className="flex flex-col w-[20rem] gap-2">
        <label htmlFor="company">Company Name</label>
        <input name="company" />
        <label htmlFor="role">Role</label>
        <input name="role" />
      </div>
    </div>
  );
}

export default CoverLetter;
