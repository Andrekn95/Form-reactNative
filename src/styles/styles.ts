export const styles = {
    // =========================
    // Layout
    // =========================
    layout: {
        app: "flex-1 flex-row bg-slate-100",
        content: "flex-1 p-6",
        section: "mb-6",
    },

    // =========================
    // Sidebar
    // =========================
    sidebar: {
        container:
            "w-64 bg-slate-900 px-4 py-6 border-r border-slate-800",

        title:
            "text-white text-2xl font-bold mb-8",

        button:
            "px-4 py-3 rounded-xl mb-2",

        buttonActive:
            "bg-blue-600",

        buttonInactive:
            "bg-transparent",

        buttonText:
            "text-white font-medium",
    },

    // =========================
    // TopBar
    // =========================
    topbar: {
        container:
            "flex-row items-center justify-between",

    },

    // =========================
    // Cards
    // =========================
    card: {
        user:
            "bg-white rounded-2xl p-5 shadow-sm mb-4",

        metric:
            "bg-white rounded-2xl p-5 shadow-sm flex-1",

        form:
            "bg-white rounded-2xl p-6 shadow-sm",

        modal:
            "bg-white rounded-2xl p-6 w-[500px]",
    },

    // =========================
    // Tipografía
    // =========================
    text: {
        title:
            "text-3xl font-bold text-slate-800",

        title2:
            "text-xl font-semibold text-slate-700",

        subtitle:
            "text-sm text-slate-500",

        error:
            "text-red-500 text-sm mt-1",

        metricValue:
            "text-2xl font-bold text-slate-800",

        metricLabel:
            "text-sm text-slate-500",
    },

    // =========================
    // Inputs
    // =========================
    input: {
        base:
            "border border-slate-300 rounded-xl px-4 py-3 bg-white",

        error:
            "border border-red-500 rounded-xl px-4 py-3 bg-white",

        label:
            "text-sm font-medium text-slate-700 mb-2",
    },

    // =========================
    // Botones
    // =========================
    button: {
        primary:
            "bg-blue-600 px-5 py-3 rounded-xl",

        secondary:
            "bg-slate-500 px-5 py-3 rounded-xl",

        danger:
            "bg-red-600 px-5 py-3 rounded-xl",

        success:
            "bg-green-600 px-5 py-3 rounded-xl",

        text:
            "text-white font-semibold text-center",
    },

    // =========================
    // Modal
    // =========================
    modal: {
        overlay:
            "flex-1 justify-center items-center bg-black/40",

        container:
            "bg-white rounded-2xl p-6 w-[500px]",
    },
} as const;