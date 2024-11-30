import Container from "../Page/Container";
import UserInfo from "./UserInfo";

function Header() {
  return (
    <div className="py-5 bg-primary-3 text-center">
      <Container>
        <h1 className="text-[24px] font-bold">CANBANITODO</h1>
        <div className="absolute right-0 top-2">
          <UserInfo />
        </div>
      </Container>
    </div>
  );
}

export default Header;
