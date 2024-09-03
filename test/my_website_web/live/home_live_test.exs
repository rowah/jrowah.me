defmodule MyWebsiteWeb.HomeLiveTest do
  use MyWebsiteWeb.ConnCase

  import Phoenix.LiveViewTest

  describe "/" do
    test "renders page", %{conn: conn} do
      {:ok, _view, html} = live(conn, "/")

      assert html =~ "James Rowa"
      assert html =~ "Software Developer"
    end
  end
end
