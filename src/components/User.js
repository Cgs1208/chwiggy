import React, { useState } from "react";

function User({ name }) {
  return (
    <div className="user-card">
      <h2>{name}</h2>
      <h2>Location</h2>
      <h2>Contact</h2>
    </div>
  );
}

export default User;
