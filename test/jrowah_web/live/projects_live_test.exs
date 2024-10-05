defmodule JrowahWeb.ProjectsLiveTest do
  use JrowahWeb.ConnCase, async: true

  import Phoenix.LiveViewTest

  test "disconnected and connected render", %{conn: conn} do
    {:ok, page_live, disconnected_html} = live(conn, "/")
    assert disconnected_html =~ "Home"
    assert render(page_live) =~ "Home"
  end
end
