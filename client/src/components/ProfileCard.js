import React from "react";
import TopProfList from "./utils/TopProfList";
function ProfileCard() {
  return (
    <div style={{ width: "30%" }}>
      <div class="flex flex-column">
        <div class="p-8 bg-white shadow mt-4" style={{ width: "100%" }}>
          <div class="mt-2 text-center  pb-6">
            {" "}
            <h1 class="text-3xl font-medium text-gray-700 mb-4">
              Jessica Jones, <span class="font-light text-gray-500">27</span>
            </h1>{" "}
            {/* <p class="font-light text-gray-600 mt-3">Bucharest, Romania</p>{" "} */}
            <div className="flex flex-row w-100 justify-evenly">
              <div>
                {" "}
                <p class="font-bold text-gray-700 text-xl">22</p>{" "}
                <p class="text-gray-400">Research Papers</p>{" "}
              </div>{" "}
              <div>
                {" "}
                <p class="font-bold text-gray-700 text-xl">10</p>{" "}
                <p class="text-gray-400">Patents</p>{" "}
              </div>{" "}
              <div>
                {" "}
                <p class="font-bold text-gray-700 text-xl">89</p>{" "}
                <p class="text-gray-400">Coins</p>{" "}
              </div>{" "}
            </div>
            <p class="mt-8 text-gray-500">
              Solution Manager - Creative Tim Officer
            </p>{" "}
            <p class="mt-2 text-gray-500">University of Computer Science</p>{" "}
          </div>{" "}
        </div>
      </div>
      <div class="">
        <div class="p-8 bg-white shadow mt-4 ">
          <div class="mt-2 text-center  italic pb-6">
            {" "}
            <h1 class="text-2xl font-medium text-gray-700 mb-4">
              ``Thought of the day``
            </h1>{" "}
            {/* <p class="font-light text-gray-600 mt-3">Bucharest, Romania</p>{" "} */}
            <div className="flex flex-row w-100 justify-evenly"></div>
            <p class="mt-2 text-gray-500">Life is a journey, enjoy it!</p>{" "}
          </div>{" "}
        </div>
      </div>
      <TopProfList />
    </div>
  );
}

export default ProfileCard;
