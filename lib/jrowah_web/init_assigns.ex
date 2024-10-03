defmodule JrowahWeb.InitAssigns do
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
     |> assign(:page_title, "James Rowa - Software Developer")}
  end

  @doc """
  Attaches the current url to the spcket
  """

  @spec attach_current_url_hook(Phoenix.LiveView.Socket.t()) :: Phoenix.LiveView.Socket.t()
  def attach_current_url_hook(socket) do
    attach_hook(socket, :attach_url_hook, :handle_params, fn _params, url, socket ->
      {:cont, assign(socket, :current_url, url)}
    end)
  end
end
