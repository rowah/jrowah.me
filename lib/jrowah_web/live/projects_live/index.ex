defmodule JrowahWeb.ProjectsLive.Index do
  @moduledoc false

  use JrowahWeb, :live_view

  alias Jrowah.Projects

  @impl Phoenix.LiveView
  def mount(_params, _session, socket) do
    {:ok,
     socket
     |> assign(page_title: "- Projects")
     |> assign(projects: Projects.list_projects())}
  end

  @impl Phoenix.LiveView
  def handle_params(_params, _url, socket) do
    {:noreply, socket}
  end
end
