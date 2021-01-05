import React from "react";

const ColofulMessage2 = (props) => {
  //console.log(props);
  //呼び出し元に記載したpropsがオブジェクトとして渡ってくる

  const { color, children } = props;
  //分割代入でコードをすっきりと￥

  const contentStyle = {
    color: color,
    //colorに対してcolorを入れるような場合は、
    //コロン以降を省略しても良い
    fontSize: "18px"
  };

  return <p style={contentStyle}>{children}</p>;
};

//コンポーネントのタグ間に書かれた内容を受け取るにはchildrenという特別なプロパティを使う
//呼び出し元では
//<ColofulMessage2 color="pink">元気です！！</ColofulMessage2>
//と書かれている

export default ColofulMessage2;
