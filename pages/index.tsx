const Index = () => {
  return (
    <ul>
      <li>
        <p>
          <a href="/allow-xss">allow xss page</a>
        </p>
      </li>
      <li>
        <p>
          <a href="/disallow-xss">disallow xss page</a>
        </p>
      </li>
      <li>
        <p>
          <a href="/disallow-xss-jpeg">disallow xss page with loading injected jpeg</a>
        </p>
      </li>
    </ul>
  )
}

export default Index;