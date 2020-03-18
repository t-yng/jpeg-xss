const DisAllowXssJpeg = () => {
    return (
        <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
            <h1>XSSが許可されないページ（JPEGの読み込み）</h1>
            <img src="/bad-donarudo.jpg"></img>
            <div>{'<script src="/bad-donarudo.jpg"></script>'}</div>
            <script src="/bad-donarudo.jpg"></script>
        </div>
    );
}

export default DisAllowXssJpeg;