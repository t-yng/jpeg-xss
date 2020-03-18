const DisAllowXss = () => {
    return (
        <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
            <h1>XSSが許可されないページ</h1>
            <div>{"<script>alert(1);</script>"}</div>
            <script>alert(1)</script>
        </div>
    );
}

export default DisAllowXss;