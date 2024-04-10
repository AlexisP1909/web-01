// TODO #export-functions: export function parseUrl
export function parseUrl(url = window.location.href) {
  return (url.split("?")[1] || "")
      .split("&")
      .map((part) => part.split("="))
      .reduce((params,[k,v]) => ({...params,[k]:v}),{});
}
