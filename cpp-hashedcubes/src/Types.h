#pragma once

#include "Mercator.h"

template<class T>
struct data_container {
	typedef std::vector<T> result;
};

typedef unsigned long ulong;

typedef unsigned char categorical_t;

typedef unsigned long temporal_t;

enum DimensionType {
	Spatial,
	Categorical,
	Temporal
};

struct tile_t {
	tile_t() : x(0), y(0), z(0), l(0) {}
	tile_t(uint32_t _x, uint32_t _y, uint8_t _z, uint8_t _l = 0) : x(_x), y(_y), z(_z), l(_l) {}

	inline bool operator ==(const tile_t &other) const {
		return (z == other.z && x == other.x && y == other.y);
	}

	uint64_t x : 20;
	uint64_t y : 20;
	uint64_t z : 5;
	uint64_t l : 1;
};

namespace std {
	template <> struct hash<tile_t> {
		std::size_t operator()(const tile_t k) const {
			return (k.x * ((2 << k.z) - 1)) + k.y;			
		}
	};
}

struct Tile {
	Tile() = default;
	Tile(int _x, int _y, ulong _z);
	Tile(ulong _x, ulong _y, ulong _z);

	int z { -1};
	ulong x, y;
	float lat0, lon0, lat1, lon1;

	inline bool isValid() const {
		return z != -1;
	}

	inline bool operator ==(const tile_t &tile) const {
		return z == tile.z && x == tile.x && y == tile.y;
	}

	friend std::ostream& operator<< (std::ostream& stream, const Tile& tile) {
		stream << tile.x << "/" << tile.y << "/" << tile.z;
		return stream;
	}
};

struct TileBounds {
	TileBounds() = default;
	TileBounds(Tile _tile0, Tile _tile1) : tile0(_tile0), tile1(_tile1) {}
	
	Tile tile0, tile1;

	inline bool isValid() const {
		return tile0.isValid();
	}

	friend std::ostream& operator<< (std::ostream& stream, const TileBounds& tile) {
		stream << tile.tile0.x << "/" << tile.tile0.y << "/" << tile.tile1.x << "/" << tile.tile1.y;
		return stream;
	}
};

struct LatLon {
	LatLon(double _lat, double _lon) : lat(_lat), lon(_lon) {}
	double lat, lon;
};

struct LatLngBounds {
	LatLngBounds(LatLon _latlon0, LatLon _latlon1) : latlon0(_latlon0), latlon1(_latlon1) {}
	LatLon latlon0, latlon1;
};

struct Schema {
	std::string name, path, loader;
	
	float fraction { 1.f };
	ulong leaf { 32 };
	ulong sql_threshold { 250 };

	std::vector<ulong> spatial;
	std::vector<std::pair<std::string, ulong>> categorical;
	std::vector<std::pair<std::string, ulong>> temporal;
};



