"use client";
import Image from "next/image";
import searchIcon from "./assets/search.png";
import { useRouter, useSearchParams } from "next/navigation";
import css from "./Topbar.module.css";
import {
  ChangeEventHandler,
  FormEventHandler,
  useState,
} from "react";

export default function Topbar() {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");
  const [keywords, setKeyWords] = useState(searchParams.get("keywords") || "");
  const router = useRouter();

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if (keywords === "") {
      return router.push(`/${category ? `?category=${category}` : ""}`);
    }
    router.push(
      `/?keywords=${keywords}${category ? `&category=${category}` : ""}`
    );
  };

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setKeyWords(event.target.value);
  };

  return (
    <div className={css.root}>
      <form action={"#"} className={css.searchWrapper} onSubmit={handleSubmit}>
        <button className={css.searchIconWrapper} type="submit">
          <Image
            fill={true}
            className={css.searchIcon}
            src={searchIcon}
            alt={`search`}
          />
        </button>
        <input
          value={keywords}
          onChange={handleChange}
          placeholder="맛집 이름을 검색해보세요"
          className={css.searchInput}
        />
      </form>
    </div>
  );
}
