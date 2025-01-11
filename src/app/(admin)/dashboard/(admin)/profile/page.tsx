'use client'

import { useEffect, useState } from "react";

export default function ProfileAdmin() {
  const [adminId, setAdminId] = useState<number>(0);

  useEffect(() => {
    const adminId = localStorage?.getItem('adminId');
    if (adminId) setAdminId(parseInt(adminId));
  }, []);


  return (
    <div>
      <h1>Profile Admin {adminId}</h1>
    </div>
  )
}