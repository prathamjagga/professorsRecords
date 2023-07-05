import React from "react";

function TopProfList() {
  return (
    <div class="overflow-hidden rounded-lg border border-gray-200 shadow-md mt-4">
      <h4 className="bg-white text-gray-500 font-bold pt-4 pl-4 pb-4">
        {" "}
        Top Professors Ranks
      </h4>
      <table class="w-full border-collapse bg-white text-left text-sm text-gray-500">
        <thead class="bg-gray-50">
          <tr>
            <th scope="col" class="px-6 py-4 font-medium text-gray-900">
              Name
            </th>
            <th scope="col" class="px-6 py-4 font-medium text-gray-900">
              Coins
            </th>
            <th scope="col" class="px-6 py-4 font-medium text-gray-900">
              Role
            </th>
            <th scope="col" class="px-6 py-4 font-medium text-gray-900">
              Department
            </th>
            <th scope="col" class="px-6 py-4 font-medium text-gray-900"></th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-100 border-t border-gray-100">
          <tr class="hover:bg-gray-50">
            <th class="flex gap-3 px-6 py-4 font-normal text-gray-900">
              <div class="text-sm">
                <div class="font-medium text-gray-700">Steven Jobs</div>
                <div class="text-gray-400">jobs@sailboatui.com</div>
              </div>
            </th>
            <td class="px-6 py-4">
              <span class="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600">
                <span class="h-1.5 w-1.5 rounded-full bg-green-600"></span>
                50
              </span>
            </td>
            <td class="px-6 py-4">Product Designer</td>
            <td class="px-6 py-4">
              <div class="flex gap-2">
                <span class="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600">
                  Design
                </span>
              </div>
            </td>
          </tr>
          <tr class="hover:bg-gray-50">
            <th class="flex gap-3 px-6 py-4 font-normal text-gray-900">
              <div class="text-sm">
                <div class="font-medium text-gray-700">Steven Jobs</div>
                <div class="text-gray-400">jobs@sailboatui.com</div>
              </div>
            </th>
            <td class="px-6 py-4">
              <span class="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600">
                <span class="h-1.5 w-1.5 rounded-full bg-green-600"></span>
                50
              </span>
            </td>
            <td class="px-6 py-4">Product Designer</td>
            <td class="px-6 py-4">
              <div class="flex gap-2">
                <span class="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600">
                  Design
                </span>
              </div>
            </td>
          </tr>
          <tr class="hover:bg-gray-50">
            <th class="flex gap-3 px-6 py-4 font-normal text-gray-900">
              <div class="text-sm">
                <div class="font-medium text-gray-700">Steven Jobs</div>
                <div class="text-gray-400">jobs@sailboatui.com</div>
              </div>
            </th>
            <td class="px-6 py-4">
              <span class="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600">
                <span class="h-1.5 w-1.5 rounded-full bg-green-600"></span>
                50
              </span>
            </td>
            <td class="px-6 py-4">Product Designer</td>
            <td class="px-6 py-4">
              <div class="flex gap-2">
                <span class="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600">
                  Design
                </span>
              </div>
            </td>
          </tr>
          <tr class="hover:bg-gray-50">
            <th class="flex gap-3 px-6 py-4 font-normal text-gray-900">
              <div class="text-sm">
                <div class="font-medium text-gray-700">Steven Jobs</div>
                <div class="text-gray-400">jobs@sailboatui.com</div>
              </div>
            </th>
            <td class="px-6 py-4">
              <span class="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600">
                <span class="h-1.5 w-1.5 rounded-full bg-green-600"></span>
                50
              </span>
            </td>
            <td class="px-6 py-4">Product Designer</td>
            <td class="px-6 py-4">
              <div class="flex gap-2">
                <span class="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600">
                  Design
                </span>
              </div>
            </td>
          </tr>
          <tr class="hover:bg-gray-50">
            <th class="flex gap-3 px-6 py-4 font-normal text-gray-900">
              <div class="text-sm">
                <div class="font-medium text-gray-700">Steven Jobs</div>
                <div class="text-gray-400">jobs@sailboatui.com</div>
              </div>
            </th>
            <td class="px-6 py-4">
              <span class="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600">
                <span class="h-1.5 w-1.5 rounded-full bg-green-600"></span>
                50
              </span>
            </td>
            <td class="px-6 py-4">Product Designer</td>
            <td class="px-6 py-4">
              <div class="flex gap-2">
                <span class="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600">
                  Design
                </span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TopProfList;
