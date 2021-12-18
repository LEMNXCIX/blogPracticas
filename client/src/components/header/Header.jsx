import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleLg">Blog de Codornices</span>
      </div>
      <img
        className="headerImg"
        src="https://revistajaraysedal.es/wp-content/uploads/2021/07/caza-codorniz-seobirdlife.jpg"
        alt=""
      />
    </div>
  );
}
