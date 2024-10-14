defmodule JrowahWeb.ProjectsLive.Index do
  @moduledoc false

  use JrowahWeb, :live_view

  @impl Phoenix.LiveView
  def mount(_params, _session, socket) do
    {:ok,
     socket
     |> assign(page_title: "- Projects")
     |> assign(projects: projects())}
  end

  @impl Phoenix.LiveView
  def handle_params(_params, _url, socket) do
    {:noreply, socket}
  end

  defp projects do
    [
      %{
        alt: "Expiry-tracker",
        description:
          "PTracker helps minimize food westage by making it easy to track the expiry dates of products. I used NodeJS, Express, MongoDB, Cloudinary, EJS, and TailwindCSS",
        href: "https://github.com/rowah/product-expiry-tracker-app",
        src:
          "https://github.com/rowah/product-expiry-tracker-app/blob/main/public/imgs/track.png?raw=true",
        title: "Product Expiry Tracker"
      },
      %{
        alt: "Easy-bills",
        description:
          "This is an invoice generator app that generates and sends invoices. I built this app using Elixir, Phoenix and LiveView.",
        href: "https://easy-bills.fly.dev/",
        src:
          "https://raw.githubusercontent.com/rowah/easy_bills/80bdd05dcbf954e2a6b9240d42b4b66827a54b4e/priv/static/images/logo-black.svg",
        title: "Easy Bills - Invoice Generator"
      },
      %{
        alt: "phx-tools",
        description:
          "This is a tool that helps with setting up an Elixir-phoenix development environment. I was part of the team that built this tool using Elixi, Phoenix and Shell.",
        href: "https://phx.tools/",
        src: "/images/shell.png",
        title: "Phx Tools"
      },
      %{
        alt: "portfolio",
        description:
          "This is my portolio website. Initially built using Gatsby, I decided to switch to Phoenix and LiveView after I mastered Elixir and Phoenix.",
        href: "https://jrowah.fly.dev",
        src: "https://avatars.githubusercontent.com/u/76947107?v=4",
        title: "Jrowah.me"
      },
      %{
        alt: "tic-tac-toe",
        description:
          "The famous paper-and-pencil game for two players who take turns
          marking the spaces in a three-by-three grid with X or O. Built with vanilla JavaScript.",
        href: "https://jr-tic-tac-toe.netlify.app/",
        src:
          "https://images.pexels.com/photos/220057/pexels-photo-220057.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "Tic-Tac-Toe"
      },
      %{
        alt: "BattleShip",
        description:
          "Another famous game. I built this game using Elixir and Phoenix. Here I learned GenServer and Supervision",
        href: "https://github.com/rowah/BattleShip",
        src:
          "https://github.com/rowah/BattleShip/blob/add_supervision/images/battleship.png?raw=true",
        title: "BattleShip"
      }
    ]
  end
end
