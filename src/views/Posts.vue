<template>
<div class="pb-16">
    <p class="font-normal text-2xl mt-5 ml-10">Posts</p>

    <p class="py-3 px-6 bg-[#f38f70] w-max text-white rounded-xl ml-3 md:ml-10 mt-10 cursor-pointer">Create New Post</p>

    <!-- table posts -->
<!-- <div class="ml-10 mt-10 flex">
    <div class="flex flex-col">
        <div class="w-full">
            <div class="border-b border-gray-200 shadow">
                <table class="divide-y divide-gray-300 ">
                    <thead class="bg-gray-50">
                        <tr>
                            <th class="px-6 py-2 text-xs text-gray-500">
                                No
                            </th>
                            <th class="px-6 py-2 text-xs text-gray-500">
                                Title
                            </th>
                            <th class="px-6 py-2 text-xs text-gray-500">
                                Edit
                            </th>
                            <th class="px-6 py-2 text-xs text-gray-500">
                                Delete
                            </th>
                        </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-300">
                        <tr class="whitespace-nowrap">
                            <td class="px-6 py-4 text-sm text-gray-500">
                                1
                            </td>
                            <td class="px-6 py-4">
                                <div class="text-sm text-gray-900">
                                    Ketika Anjime Biklek Pov
                                </div>
                            </td>
                            <td class="px-6 py-4">
                                <a href="#" class="px-4 py-1 text-sm text-blue-600 bg-blue-200 rounded-full">Edit</a>
                            </td>
                            <td class="px-6 py-4">
                                <a href="#" class="px-4 py-1 text-sm text-red-400 bg-red-200 rounded-full">Delete</a>
                            </td>
                        </tr>
                        <tr class="whitespace-nowrap">
                            <td class="px-6 py-4 text-sm text-gray-500">
                                1
                            </td>
                            <td class="px-6 py-4">
                                <div class="text-sm text-gray-900">
                                    Warga Kota Anjime Menjadi Konteks
                                </div>
                            </td>
                            <td class="px-6 py-4">
                                <a href="#" class="px-4 py-1 text-sm text-blue-600 bg-blue-200 rounded-full">Edit</a>
                            </td>
                            <td class="px-6 py-4">
                                <a href="#" class="px-4 py-1 text-sm text-red-400 bg-red-200 rounded-full">Delete</a>
                            </td>
                        </tr>
                        <tr class="whitespace-nowrap">
                            <td class="px-6 py-4 text-sm text-gray-500">
                                1
                            </td>
                            <td class="px-6 py-4">
                                <div class="text-sm text-gray-900">
                                    Gwej Raja Satir
                                </div>
                            </td>
                            <td class="px-6 py-4">
                                <a href="#" class="px-4 py-1 text-sm text-blue-600 bg-blue-200 rounded-full">Edit</a>
                            </td>
                            <td class="px-6 py-4">
                                <a href="#" class="px-4 py-1 text-sm text-red-400 bg-red-200 rounded-full">Delete</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div> -->
    
    <div class="mx-3 md:mx-0 md:ml-10 mt-10">
    <table class="border border-[#f38f70]">
        <thead class="bg-[#f38f70]">
            <tr>
                <th class="px-2 md:px-5 py-3 text-white font-medium border-r">No</th>
                <th class="px-5 py-3 text-white font-medium md:w-[180px] lg:w-[200px] xl:w-[300px] border-r">Title</th>
                <th class="px-5 py-3 text-white font-medium border-r md:w-[200px] xl:w-[270px]">Tags</th>
                <th class="px-5 py-3 text-white font-medium">Aksi</th>
            </tr>
        </thead>
        <tbody>
            <tr class="border-b border-[#f38f70]">
                <td class="py-4 text-center border-r">1</td>
                <td class="pl-3 border-r">Top Waifu Lonet</td>
                <td class="pl-3 flex flex-wrap pb-2 border-r items-center">
                    <p class="py-2 px-4 bg-[#f38f70] rounded-full text-white w-max mt-2 mr-2 text-xs">anime</p>
                    <p class="py-2 px-4 bg-[#f38f70] rounded-full text-white w-max mt-2 mr-2 text-xs">Waifu</p>
                    <p class="py-2 px-4 bg-[#f38f70] rounded-full text-white w-max mt-2 mr-2 text-xs">Wibu</p>
                    <p class="py-2 px-4 bg-[#f38f70] rounded-full text-white w-max mt-2 mr-2 text-xs">BDSM</p>
                    <p class="py-2 px-4 bg-[#f38f70] rounded-full text-white w-max mt-2 mr-2 text-xs">Stres</p>
                </td>
                <td class="px-3 text-center">
                    <p class="py-2 px-3 md:px-7 text-xs md:text-base font-medium rounded-full bg-blue-400 md:inline md:mr-3"><a href="">Edit</a></p>
                    <p class="py-2 px-3 md:px-7 text-xs md:text-base font-medium rounded-full bg-red-400 md:inline text-white md:mt-0 mt-2"><a href="">Delete</a></p>
                </td>
            </tr>
            <tr class="border-b border-[#f38f70]">
                <td class="py-4 text-center border-r">2</td>
                <td class="pl-3 border-r">Mengenal MEVN</td>
                <td class="pl-3 flex flex-wrap pb-2 border-r items-center">
                    <p class="py-2 px-4 bg-[#f38f70] rounded-full text-white w-max mt-2 mr-2 text-xs">MongoDB</p>
                    <p class="py-2 px-4 bg-[#f38f70] rounded-full text-white w-max mt-2 mr-2 text-xs">Express Js</p>
                    <p class="py-2 px-4 bg-[#f38f70] rounded-full text-white w-max mt-2 mr-2 text-xs">Vue Js</p>
                    <p class="py-2 px-4 bg-[#f38f70] rounded-full text-white w-max mt-2 mr-2 text-xs">Node Js</p>
                </td>
                <td class="px-3 text-center">
                    <p class="py-2 px-3 md:px-7 text-xs md:text-base font-medium rounded-full bg-blue-400 md:inline md:mr-3"><a href="">Edit</a></p>
                    <p class="py-2 px-3 md:px-7 text-xs md:text-base font-medium rounded-full bg-red-400 md:inline text-white md:mt-0 mt-2"><a href="">Delete</a></p>
                </td>
            </tr>
            <tr class="border-b border-[#f38f70]">
                <td class="py-4 text-center border-r">3</td>
                <td class="pl-3 border-r">Cara Menjadi Raja Psatir No Root</td>
                <td class="pl-3 flex flex-wrap pb-2 border-r items-center">
                    <p class="py-2 px-4 bg-[#f38f70] rounded-full text-white w-max mt-2 mr-2 text-xs">meme</p>
                    <p class="py-2 px-4 bg-[#f38f70] rounded-full text-white w-max mt-2 mr-2 text-xs">Satir</p>
                </td>
                <td class="px-3 text-center">
                    <p class="py-2 px-3 md:px-7 text-xs md:text-base font-medium rounded-full bg-blue-400 md:inline md:mr-3"><a href="">Edit</a></p>
                    <p class="py-2 px-3 md:px-7 text-xs md:text-base font-medium rounded-full bg-red-400 md:inline text-white md:mt-0 mt-2"><a href="">Delete</a></p>
                </td>
            </tr>
            <tr class="border-b border-[#f38f70]">
                <td class="py-4 text-center border-r">4</td>
                <td class="pl-3 border-r">Belajar SEO Website</td>
                <td class="pl-3 flex flex-wrap pb-2 border-r items-center">
                    <p class="py-2 px-4 bg-[#f38f70] rounded-full text-white w-max mt-2 mr-2 text-xs">SEO</p>
                    <p class="py-2 px-4 bg-[#f38f70] rounded-full text-white w-max mt-2 mr-2 text-xs">tips web</p>
                </td>
                <td class="px-3 text-center">
                    <p class="py-2 px-3 md:px-7 text-xs md:text-base font-medium rounded-full bg-blue-400 md:inline md:mr-3"><a href="">Edit</a></p>
                    <p class="py-2 px-3 md:px-7 text-xs md:text-base font-medium rounded-full bg-red-400 md:inline text-white md:mt-0 mt-2"><a href="">Delete</a></p>
                </td>
            </tr>
        </tbody>
    </table>
    </div>
    <!-- end table posts -->

</div>
</template>

<script>
export default {

}
</script>