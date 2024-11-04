defmodule JrowahWeb.AboutLiveTest do
  use JrowahWeb.ConnCase, async: true

  import Phoenix.LiveViewTest

  describe "/journey" do
    test "renders about page", %{conn: conn} do
      {:ok, page_live, html} = live(conn, "/journey")

      assert page_live

      assert html =~
               "Journey"
    end

    test "clicking the home link takes you to the home page", %{conn: conn} do
      {:ok, about_live, _html} = live(conn, "/journey")

      assert {:error, {:live_redirect, %{kind: :push, to: "/"}}} =
               about_live
               |> element(~s|.desktop-home-link|)
               |> render_click()
    end

    test "clicking the projects link takes you to the projects page", %{conn: conn} do
      {:ok, about_live, _html} = live(conn, "/journey")

      assert {:error, {:live_redirect, %{kind: :push, to: "/projects"}}} =
               about_live
               |> element(~s|.desktop-projects-link|)
               |> render_click()
    end

    test "clicking the blog link takes you to the blog page", %{conn: conn} do
      {:ok, about_live, _html} = live(conn, "/journey")

      assert {:error, {:live_redirect, %{kind: :push, to: "/blog"}}} =
               about_live
               |> element(~s|.desktop-blog-link|)
               |> render_click()

      # TODO: Test the newly rendered liveview
    end

    test "disconnected and connected render", %{conn: conn} do
      {:ok, about_live, disconnected_html} = live(conn, "/journey")
      assert disconnected_html =~ "Journey"
      assert render(about_live) =~ "Journey"
    end
  end
end
