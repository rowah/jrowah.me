%{
slug: "deploying-phoenix-app-to-fly",
title: "Error when Deploying to Fly.io with Custom Domain",
description: "Deploying a Phoenix app to Fly with a custom domain and fixing the 'Could not check origin for Phoenix.Socket transport' error.",
published: false,
tags: ["Phoenix", "Deployment", "Fly"],
hero_image: "/images/2024/fly_deploy.png"
}

---

## Introduction
I was working on my very first client's project and once that was complete, it was time to deploy. Since my client needed a .co.ke domain, I chose one of the local domain registrars and then headed to deploying with Fly.io. If you want to get started with deploying a Phoenix application, I highly recommend [Fly.io](). In the process of deployment, I ran into an error on the live logs on fly. I am writing this blog with the solution to the error for my future self and to anyone who might run into a similar problem.

## The Error Message

```elixir
[info] CONNECTED TO Phoenix.LiveView.Socket in 36µs
Transport: :longpoll
Serializer: Phoenix.Socket.V2.JSONSerializer
Parameters: %{"_csrf_token" => "<censored>", ...}
[error] Could not check origin for Phoenix.Socket transport.
Origin of the request: https://www.your_domain.whatever
This happens when you are attempting a socket connection to a different host than 
the one configured in your config/files. 
For example, in development the host is configured to "localhost" 
but you may be trying to access it from"127.0.0.1". 
To fix this issue, you may either:
1. update [url: [host: ...]] to your actual host 
in the config file for your current environment (recommended)
2. pass the :check_origin option when configuring your endpoint 
or when configuring the transport in your UserSocket module, 
explicitly outlining which origins are allowed:
check_origin: ["https://example.com", "//another.com:888", "//other.com"]
```

## The Solution
I went through the logs and then started looking for a solution. Then I came across one where Chris, the creator provides more context to another developer who had a similar problem. [Chris' explanation](https://community.fly.io/t/phoenix-liveview-constantly-refreshes-with-custom-domain/3384/3).
Make sure you have both A and AAAA records for both the root domain and www subdomain:

The line that fixed the issue

Update runtime.exs to properly handle both domains:

```elixir
config :app, AppWeb.Endpoint,
  check_origin: [
    "https://your_domain.whatever",
    "https://www.your_domain.whatever"
  ],
  ```

Update prod.exs to ensure SSL is properly configured:

```elixir
config :app, AppWeb.Endpoint,
  cache_static_manifest: "priv/static/cache_manifest.json",
  force_ssl: [rewrite_on: [:x_forwarded_proto]]
```

```elixir
Fly certs add your_domain.whatever
Fly certs add www.your_domain.whatever
```

Wait a few minutes, then verify both certificates:
```elixir
fly certs show
```

Check the status of both certificates:

```elixir
fly certs check your_domain.whatever
fly certs check www.your_domain.whatever
```