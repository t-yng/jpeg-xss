import { useState, useRef } from "react";

const Index = () => {
  const [text, setText] = useState('');
  const ref = useRef<HTMLTextAreaElement>(null);

  const handleClick = () => {
    setText(ref.current?.value ?? '');
  }

  return (
    <>
      <div dangerouslySetInnerHTML={{__html: text}}>
      </div>
      <div style={{width: 300}}>
        <textarea style={{width: '100%', boxSizing: 'border-box'}} rows={5} ref={ref}></textarea>
        <div style={{textAlign: 'right'}}>
          <button onClick={handleClick}>投稿</button>
        </div>
      </div>
    </>
  )
}

export default Index;