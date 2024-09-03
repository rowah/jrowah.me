defmodule MyWebsite.Application do
  # See https://hexdocs.pm/elixir/Application.html
  # for more information on OTP Applications
  @moduledoc false

  use Application

  @impl true
  def start(_type, _args) do
    children = [
      MyWebsiteWeb.Telemetry,
      {DNSCluster, query: Application.get_env(:my_website, :dns_cluster_query) || :ignore},
      {Phoenix.PubSub, name: MyWebsite.PubSub},
      # Start the Finch HTTP client for sending emails
      {Finch, name: MyWebsite.Finch},
      # Start a worker by calling: MyWebsite.Worker.start_link(arg)
      # {MyWebsite.Worker, arg},
      # Start to serve requests, typically the last entry
      MyWebsiteWeb.Endpoint
    ]

    # See https://hexdocs.pm/elixir/Supervisor.html
    # for other strategies and supported options
    opts = [strategy: :one_for_one, name: MyWebsite.Supervisor]
    Supervisor.start_link(children, opts)
  end

  # Tell Phoenix to update the endpoint configuration
  # whenever the application is updated.
  @impl true
  def config_change(changed, _new, removed) do
    MyWebsiteWeb.Endpoint.config_change(changed, removed)
    :ok
  end
end
