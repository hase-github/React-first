import React from "react";

const ColofulMessage = (props) => {
  //console.log(props);
  //呼び出し元に記載したpropsがオブジェクトとして渡ってくる

  // console.log("カラフル");
  //親コンポーネントが再レンダリングされると、
  //子のコンポーネントも再レンダリングされる。
  //また、propsの中身が変わると再レンダリングされる。
  const contentStyle = {
    color: props.color,
    fontSize: "18px"
  };

  return <p style={contentStyle}>{props.message}</p>;
};

export default ColofulMessage;
