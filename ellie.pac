function FindProxyForURL(url, host) {
    // Proxy traffic for valhalla.ellieplanner.com and related domains
    if (shExpMatch(host, "*.valhalla.ellieplanner.com") ||
        shExpMatch(host, "*.onrender.com") ||
        shExpMatch(host, "*.cloudflare.net")) {
        return "PROXY 127.0.0.1:8080";
    }

    // Direct connection for all other traffic
    return "DIRECT";
}