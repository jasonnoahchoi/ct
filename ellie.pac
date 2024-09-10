function FindProxyForURL(url, host) {
    // Proxy only requests to valhalla.ellieplanner.com through mitmproxy
    if (shExpMatch(host, "*.valhalla.ellieplanner.com")) {
        return "PROXY 127.0.0.1:8080";
    }

    // For all other URLs, bypass the proxy
    return "DIRECT";
}