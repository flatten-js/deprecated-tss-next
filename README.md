# TSS-Next

This is a type-safe Nextjs template.
Created inspired by [create-t3-app](https://github.com/t3-oss/create-t3-app)

## Getting Started

### Use as a repository template

Select ```Use this template``` at the top of the page or create a new repository by selecting this [Use this template](https://github.com/flatten-js/tss-next/generate)

### Clone repository

Clone a newly created repository using a template
```
git clone https://github.com/flatten-js/new-tss-next.git
cd new-tss-next

# Create environment variable files
cp .env.example .env
cp ./app/.env.example ./app/.env

docker compose up -d
```
## FAQ

### When starting Docker ```./startup.sh: not found``` error

```
tss-next-app-1  | /usr/local/bin/docker-entrypoint.sh: 11: exec: ./startup.sh: not found
```

This is a common error in **Windows**.
If the line feed code in startup.sh is CRLF, try changing it to LF.

## License
Licensed under the MIT. See the [LICENSE](https://github.com/flatten-js/tss-next/blob/master/LICENSE) file for details.