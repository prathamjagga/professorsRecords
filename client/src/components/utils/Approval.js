import React from "react";

function Approval() {
  return (
    <div class="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
      <div class="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
        <div>
          <div class="flex mb-4 items-center">
            <p class="w-full text-grey-darkest">
              Add another component to Tailwind Components
            </p>
            <button class="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded  text-green border-green bg-green-500">
              Approve
            </button>
            <button class="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red  hover:bg-red">
              Unapprove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Approval;
