defmodule JrowahWeb.InitialAssigns do
  @moduledoc """
  This module is used to initialize assigns in the live view
  """

  import Phoenix.Component
  import Phoenix.LiveView

  @spec on_mount(atom(), map(), map(), Phoenix.LiveView.Socket.t()) ::
          {:cont, Phoenix.LiveView.Socket.t()}
  def on_mount(:default, _params, _session, socket) do
    {:cont,
     socket
     |> attach_current_url_hook()
     |> assign(:page_title, "- Software Developer")}
  end

  defp attach_current_url_hook(socket) do
    attach_hook(socket, :attach_url_hook, :handle_params, fn _params, url, socket ->
      {:cont, assign(socket, :current_url, url)}
    end)
  end
end
