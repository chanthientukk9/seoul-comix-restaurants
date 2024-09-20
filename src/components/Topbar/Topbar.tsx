import Image from "next/image";
import searchIcon from "./assets/search.png";
import css from "./Topbar.module.css";

export default function Topbar() {
  return (
    <div className={css.root}>
      <div className={css.searchWrapper}>
        <div className={css.searchIconWrapper}>
          <Image
            fill={true}
            className={css.searchIcon}
            src={searchIcon}
            alt={`search`}
          />
        </div>
        <input
          placeholder="맛집 이름을 검색해보세요"
          className={css.searchInput}
        />
      </div>
    </div>
  );
}
