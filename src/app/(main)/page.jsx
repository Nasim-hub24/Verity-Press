 import LeftSideBar from "@/components/homepage/news/LeftSideBar";
import { cacheLife } from "next/cache";

async function getCategories() {
  "use cache";
  cacheLife("hours");

  const res = await fetch(
    "https://openapi.programming-hero.com/api/news/categories"
  );

  if (!res.ok) {
    throw new Error("Failed to fetch news categories");
  }

  const data = await res.json();
  return data.data;
}

export default async function Home() {
  const categories = await getCategories();

  return (
    <div className="container mx-auto grid grid-cols-12 gap-4 my-[30px]">
      <div className="col-span-2  p-2">
        {/* <h2 className="text-l font-bold mb-4">All Categories</h2>
        <ul className="flex flex-col gap-4">
          {categories.news_category.map((category) => (
            <li
              key={category.category_id}
              className="bg-gray-300 p-2 rounded-xl font-normal text-center"
            >
              {category.category_name}
            </li>
          ))}
        </ul> */}
        <LeftSideBar categories={categories} activeId={null}></LeftSideBar>
      </div>

      <div className="col-span-8 bg-gray-500 p-4">
        News section
      </div>

      <div className="col-span-2 bg-gray-500 p-4">
        Icons
      </div>
    </div>
  );
}
