var HIPATHIA_LEGEND_IMAGE = "data:text/xml;base64,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";
