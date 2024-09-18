defmodule MyWebsite.MixProject do
  use Mix.Project

  def project do
    [
      app: :my_website,
      version: "0.1.0",
      elixir: "~> 1.14",
      elixirc_paths: elixirc_paths(Mix.env()),
      start_permanent: Mix.env() == :prod,
      aliases: aliases(),
      deps: deps(),
      preferred_cli_env: [
        ci: :test,
        "ci.deps_and_security": :test,
        "ci.deps": :test,
        "ci.formatting": :test,
        "ci.security": :test,
        "ci.test": :test,
        coveralls: :test,
        "coveralls.detail": :test,
        "coveralls.html": :test,
        credo: :test,
        dialyzer: :test,
        sobelow: :test
      ],
      test_coverage: [tool: ExCoveralls],
      dialyzer: [plt_add_apps: [:ex_unit, :mix], ignore_warnings: "config/dialyzer.ignore"]
    ]
  end

  # Configuration for the OTP application.
  #
  # Type `mix help compile.app` for more information.
  def application do
    [
      mod: {MyWebsite.Application, []},
      extra_applications: [:logger, :runtime_tools]
    ]
  end

  # Specifies which paths to compile per environment.
  defp elixirc_paths(:test), do: ["lib", "test/support"]
  defp elixirc_paths(_), do: ["lib"]

  # Specifies your project dependencies.
  #
  # Type `mix help deps` for examples and options.
  defp deps do
    [
      {:phoenix, "~> 1.7.11"},
      {:phoenix_html, "~> 4.0"},
      {:phoenix_live_reload, "~> 1.2", only: :dev},
      {:phoenix_live_view, "~> 0.20.2"},
      {:floki, ">= 0.30.0", only: :test},
      {:phoenix_live_dashboard, "~> 0.8.3"},
      {:esbuild, "~> 0.8", runtime: Mix.env() == :dev},
      {:tailwind, "~> 0.2", runtime: Mix.env() == :dev},
      {:heroicons,
       github: "tailwindlabs/heroicons",
       tag: "v2.1.1",
       sparse: "optimized",
       app: false,
       compile: false,
       depth: 1},
      {:swoosh, "~> 1.5"},
      {:finch, "~> 0.13"},
      {:telemetry_metrics, "~> 0.6"},
      {:telemetry_poller, "~> 1.0"},
      {:gettext, "~> 0.20"},
      {:jason, "~> 1.2"},
      {:dns_cluster, "~> 0.1.1"},
      {:bandit, "~> 1.2"},
      {:github_workflows_generator, "~> 0.1", only: :dev, runtime: false},
      {:sobelow, "~> 0.13", only: [:dev, :test], runtime: false},
      {:credo, "~> 1.7", only: [:dev, :test], runtime: false},
      {:dialyxir, "~> 1.4", only: [:dev, :test], runtime: false},
      {:excoveralls, "~> 0.18", only: :test},
      {:mix_audit, "~> 2.1"}
    ]
  end

  # Aliases are shortcuts or tasks specific to the current project.
  # For example, to install project dependencies and perform other setup tasks, run:
  #
  #     $ mix setup
  #
  # See the documentation for `Mix` for more info on aliases.
  defp aliases do
    [
      setup: ["deps.get", "assets.setup", "assets.build"],
      "assets.setup": ["tailwind.install --if-missing", "esbuild.install --if-missing"],
      "assets.build": ["tailwind my_website", "esbuild my_website"],
      "assets.deploy": [
        "tailwind my_website --minify",
        "esbuild my_website --minify",
        "phx.digest",
        "release"
      ],
      ci: [
        "ci.deps_and_security",
        "ci.formatting",
        "ci.code_quality",
        "ci.test"
      ],
      "ci.deps_and_security": ["sobelow --config .sobelow-config"],
      "ci.code_quality": [
        "compile --force --warnings-as-errors",
        "credo --strict",
        "dialyzer"
      ],
      "ci.formatting": ["format --check-formatted", "cmd --cd assets npx prettier -c .."],
      "ci.test": [
        "test --cover --warnings-as-errors"
      ],
      prettier: ["cmd --cd assets npx prettier -w .."]
    ]
  end
end
