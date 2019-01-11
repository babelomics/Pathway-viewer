var HIPATHIA_LEGEND_IMAGE = "data:text/xml;base64,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";
