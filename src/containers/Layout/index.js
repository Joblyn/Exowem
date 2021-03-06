import React, { useState } from "react";
import { Footer, Header } from "../../components";
import { Container } from "./style";

export default function Layout({ darkTheme, setDarkTheme, children, restProps }) {
  const [isAtTop, setIsAtTop] = useState(false);

  const childrenWithProps = React.Children.map(children, (child) => {
    // Checking isValidElement is the safe way and avoids a typescript
    // error too.
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { setIsAtTop });
    }
    return child;
  });

  return (
    <Container {...restProps}>
      <Header isAtTop={isAtTop} darkTheme={darkTheme}/>
      <main>{childrenWithProps}</main>
      <Footer darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>
    </Container>
  );
}
