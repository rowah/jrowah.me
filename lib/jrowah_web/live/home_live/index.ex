defmodule JrowahWeb.HomeLive.Index do
  @moduledoc false

  use JrowahWeb, :live_view

  @impl Phoenix.LiveView
  def mount(_params, _session, socket) do
    start_date = ~D[2023-01-01]
    current_date = Date.utc_today()
    experience_duration = Date.diff(current_date, start_date)

    years = div(experience_duration, 365)
    months = div(rem(experience_duration, 365), 30)

    {:ok,
     socket
     |> assign(page_title: "- Home")
     |> assign(experience: %{years: years, months: months})}
  end

  @impl Phoenix.LiveView
  def handle_params(_params, _url, socket) do
    {:noreply, socket}
  end
end
