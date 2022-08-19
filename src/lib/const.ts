export const base_url = `https://api.trello.com`;
export const location = window.location.toString();
export const repository_name = getRepositoryName(location);
export const key = `${repository_name}_trello`;

function getRepositoryName(address: string) {
  var res = address.match(/https:\/\/github.com\/([^\/]+\/[^\/]+)/);
  console.log(res);
  return res![1];
}
