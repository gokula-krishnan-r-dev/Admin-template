import React from "react";
import ImageGallery from "./ImageGallery";

function ServiceProviderCard({ provider }: any) {
  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
        <p>
          <strong>Name:</strong> {provider.first_name} {provider.full_name}
        </p>
        <p>
          <strong>Email:</strong> {provider.email}
        </p>
        <p>
          <strong>Mobile:</strong> {provider.mobile_number}
        </p>
        <p>
          <strong>Address:</strong> {provider.residential_address}
        </p>
        <p>
          <strong>DOB:</strong>{" "}
          {new Date(provider.date_of_birth).toLocaleDateString()}
        </p>
        <p>
          <strong>Qualifications:</strong> {provider.qualifications.join(", ")}
        </p>
        <p>
          <strong>Skills:</strong> {provider.skills_and_expertise.join(", ")}
        </p>
        <p>
          <strong>Experience:</strong> {provider.experience_in_years} years
        </p>
        <p>
          <strong>Job Type:</strong> {provider.job_type}
        </p>
        <p>
          <strong>Hourly Salary:</strong> ${provider.hourly_salary}
        </p>
      </div>
      <ImageGallery provider={provider} />
    </div>
  );
}

export default ServiceProviderCard;
