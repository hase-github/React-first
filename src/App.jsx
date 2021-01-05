import React, { useEffect, useState } from "react";
import ColofulMessage from "./components/ColofulMessage";
import ColofulMessage2 from "./components/ColofulMessage2";
//importに書くファイルは拡張子を省略できる

const App = () => {
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(true);
  const [faceShowFlag2, setFaceShowFlag2] = useState(true);
  //useStateから配列の分割代入で値を取り出す
  //1つ目がstateの変数名、
  //２つ目がstateを更新する関数(１つ目の変数名にsetを付けた関数名にするのが一般的)
  //useStateには初期値を設定できる。ここではnumber型の0
  //
  //console.log("最初");
  //stateが変わるとコンポーネントが再レンダリングされる。
  //配下のコンポーネントも一緒に再レンダリングされる。

  const onClickButton = () => alert();
  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickSwichShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
    //console.log(faceShowFlag);
  };
  const onClickSwichShowFlag2 = () => {
    setFaceShowFlag2(!faceShowFlag);
    //console.log(faceShowFlag);
  };

  useEffect(() => {
    //console.log("useEffect!");
    /** この書き方をすると、stateの変更と再レンダリングが無限ループする
     *if(num%3=== 0){
     *  setFaceShowFlag(true);
     *}else{
     *  setFaceShowFlag(false);
     *}
     */

    //上の書き方を改善
    if (num % 3 === 0) {
      faceShowFlag2 || setFaceShowFlag2(true);
    } else {
      faceShowFlag2 && setFaceShowFlag2(false);
    }
  }, [num]); //useEffectの第２引数の配列に書いた変数が変化したときだけ、第１引数の関数が動く
  //空入れるにすると、最初に読み込まれた１回だけ処理される。

  const contentStyle = {
    color: "blue",
    fontSize: "18px"
  };

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      {
        //タグ中に{}があると、そこにはjsを書ける
        //styleのところでは外側の波括弧はjsという意味で、
        //内側の波括弧ではオブジェクトとしてスタイルが書かれる
        //jsのオブジェクトなので文字列として''で囲う（例：'red'）
      }
      <p style={contentStyle}>お元気ですか</p>
      <ColofulMessage color="blue" message="お元気ですか？" />
      <ColofulMessage color="pink" message="元気です！" />
      <ColofulMessage2 color="pink">元気です！！</ColofulMessage2>
      {
        //ColofulMessageタグはコンポーネントとして定義した。
        //コンポーネントにはpropsという変数みたいなものを渡せる（ここでは、color,messageがprops）
      }
      <button onClick={onClickButton}>ボタン</button>
      <br />
      <button onClick={onClickCountUp}>カウントアップ！</button> <br />
      <button onClick={onClickSwichShowFlag}>on/off</button> <br />
      <button onClick={onClickSwichShowFlag2}>on/off 2</button> <br />
      <p>{num}</p>
      {faceShowFlag && <p>＼(^o^)／</p>}
      {
        //&&は「かつ, and」という意味で用いられるが、
        //本当は、「左側がtrueなら右側を返す（左側がfalseなら左側を返す）」という意味。
        //(||も本当は「左側がfalseなら右側を返す」という意味)
      }
      {faceShowFlag2 && <p>(´・ω・｀)</p>}
    </>
  );
};
//JSX記法は一つのタグで囲う必要がある
//divタグでもいいが不要なレンダリングが発生するので、
//React.Ftagmentタグを使用する。
// → 何も書かない空のタグでも同じ効果がある <> </>

//コンポーネント名（関数名）は必ず大文字から始める

export default App; // 他のファイルでもApp関数をコンポーネントとして使用できるようになる

//reactのコンポーネントとして使用する場合は、
//拡張子をjsxにするのがよい（jsのままでも可）
