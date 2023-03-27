"use client";

import { useWindowSize } from "@/hooks/window";
import { Icon } from "@iconify/react";
import { useLayoutEffect, useState } from "react";
import {
  Container,
  LateralInfo,
  Image,
  Description,
  SocialMedia,
  HomeTitle,
  HomeText } from "./style";


export default function Home() {
  const { width } = useWindowSize();

  const [isWrap, setIsWrap] = useState<boolean>((width > 960) || true);

  useLayoutEffect(() => {
    let isMounted = true;

    if (isMounted) {
      if (width > 960) {
        setIsWrap(true);
      } else {
        setIsWrap(false);
      };
    };

    return () => {
      isMounted = false;
    };
  }, [width]);

  return (
    <Container
      id="section-home"
      style={{
        backgroundImage: `url(${"http://localhost:3000/images/home.jpg"})`,
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      wrap={isWrap}
    >
      <LateralInfo wrap={isWrap}>
        <Image alt="teste" src={"http://localhost:3000/images/avatar.jpg"}/>

        <Description>
          <HomeText>If You Need an:</HomeText>
          <HomeTitle>Artist</HomeTitle>
          <HomeTitle>Designer</HomeTitle>
          <HomeTitle>Modeler</HomeTitle>
          <HomeTitle>Painter</HomeTitle>
          <HomeText>That`s your lucky day!</HomeText>
        </Description>

        <SocialMedia>
          <Icon
            icon={"skill-icons:instagram"}
            style={{ height: "28px", width: "28px" }}
          />

          <Icon
            icon={"logos:pinterest"}
            style={{ height: "28px", width: "28px" }}
          />

          <Icon
            icon={"logos:linkedin-icon"}
            style={{ height: "28px", width: "28px" }}
          />
        </SocialMedia>
      </LateralInfo>
    </Container>
  )
}
