defmodule MyWebsite.Repo do
  use Ecto.Repo,
    otp_app: :my_website,
    adapter: Ecto.Adapters.Postgres
end
