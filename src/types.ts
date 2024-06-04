export type SelectOption = ['user', 'repo'];
export type ValueSelect = 'user' | 'repo';

export type UserRequest = {
    login: string;
    'public_repos': number,
}

export type RepoRequest = {
    "full_name": string,
    "stargazers_count": number,
}

export type Requests = UserRequest & RepoRequest;
