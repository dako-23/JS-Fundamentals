function solve(text) {

    let regexp = /\b[A-Z][a-z]+ \b[A-Z][a-z]+/g

    const result = text.match(regexp)
    console.log(result.join(' '));






}
solve('Ivan Ivanov, ivan ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Ivan IvAnov, Ivan	Ivanov');